class App {
  constructor(elem) {
    this.elem = elem;
    this.map = null;
    this.points = [];
  }

  async start() {
    const data = (await axios.get("file.json")).data;
    this.points = data;
    //this.points=data
    console.log(this.points);
    ymaps.ready(() => this.initMap());

    let sumDisatnce = 0;
    let commonTime =0 ;
    for (let i = 0; i < this.points.length - 1; i++) {
      const dist = getHaversinusFormula(
        this.points[i].latitude,
        this.points[i + 1].latitude,
        this.points[i].longitude,
        this.points[i + 1].longitude
      );
      sumDisatnce += dist;
console.log(sumDisatnce)
      //getCalc(sumDisatnce)
    }

    for (let k = 0; k < this.points.length-1; k++) {
      const time = this.points[k].time;
      commonTime +=time;
      console.log(commonTime)
    }
    getCalc(sumDisatnce, commonTime);
    console.log(sumDisatnce, commonTime);
  }

  initMap() {
    this.map = new ymaps.Map("map", {
      center: [51.7401757147344, -1.16],

      zoom: 11,
    });
    //console.log(map);

    this.points.forEach((item) => {
      const point = new ymaps.Placemark(
        [[item.latitude], [item.longitude], [item.hintContent]],
        {
          hintContent: ` ${item.hintContent}`,
          balloonContent: "points",
        }
      );

      this.map.geoObjects.add(point);
    });
    const path = this.points.map((point) => [point.latitude, point.longitude]);
    const line = new ymaps.Polyline(path);
    this.map.geoObjects.add(line);
  }
}
function getHaversinusFormula(lat1, lat2, long1, long2) {
  const R = 6371;
  const lat1Radian = (lat1 * 3.14) / 180;
  const lat2Radian = (lat2 * 3.14) / 180;
  const long1Radian = (long1 * 3.14) / 180;
  const long2adian = (long2 * 3.14) / 180;

  const forSinLat = (lat2Radian - lat1Radian) / 2;
  const forSinLong = (long2adian - long1Radian) / 2;

  const squareRoot =
    (Math.sin(forSinLat) ** 2 +
      Math.cos(lat1Radian) *
        Math.cos(lat2Radian) *
        Math.sin(forSinLong) ** 2) **
    (1 / 2);

  const distance = 2 * R * Math.asin(squareRoot);

  return distance;
}

function getCalc(sumDisatnce, commonTime) {
  const button = document.getElementById("btn");
  const wrap = document.getElementById("wrap");
  button.addEventListener("click", function () {
    const speed = document.getElementById("speed");
    const time = sumDisatnce / speed.value;
    console.log(time)
    wrap.innerText='';
    wrap.insertAdjacentHTML(`beforeend`,`<p>общее время гонки- ${(time).toFixed(0)} часов</p>
    <p> время простоев - ${commonTime} мин.</p>
    <p>Время завершения гонки  - ${(time + commonTime).toFixed(0)}часов</p>`)
  });
}
const app = new App(document.getElementById("app"));
app.start();
/*function loadFile() {
  ///const data = await axios.get('.file.json');
  const xhr = new XMLHttpRequest();
  xhr.open("GET", " file.json", true);
  xhr.onload = () => {
    const data = JSON.parse(xhr.responseText);
    //resolve(data)
    console.log(data);
//писать код на 9 стр вычисления
    ymaps.ready(() => {
      const map = new ymaps.Map("map", {
        center: [51.7401757147344, -1.16],

        zoom: 11,
      }); //console.log(map)

      data.forEach((item) => {
        const point = new ymaps.Placemark(
          [[item.latitude], [item.longitude], [item.hintContent]],
          {
            hintContent: ` ${item.hintContent}`,
            balloonContent: "points",
          }
        );

        map.geoObjects.add(point);
      });

      const path = data.map((point) => [point.latitude, point.longitude]);
      const line = new ymaps.Polyline(path);
      map.geoObjects.add(line);

      // var multiRoute = new ymaps.multiRouter.MultiRoute(
      //   {
      //     referencePoints: [
      //       [51.73, -1.03],
      //       [51.71, -1.3][(51.72, -1.16)],
      //       [51.72, -1.24],
      //       [51.73, -1.09],
      //       [51.71, -1.2],
      //     ],
      //   },
      //   {
      //     editorDrawOver: false,
      //     editorMidPointsType: "via",
      //   }
      // );

      // multiRoute.editor.start({
      //   addWayPoints: true,

      //   removeWayPoints: true,

      //   addMidPoints: true,
      // });
      // map.geoObjects.add(multiRoute);
      /* var geometry = [
           [51.72, -1.16], [51.72, -1.24], [51.73, -1.09], [51.71, -1.2]

          ],
          properties = {
            hintContent: "Ломаная линия",
          },
          options = {
            strokeColor: "#ff0000",
            strokeWidth: 5,
            strokeStyle: "1 5",
          },
          polyline = new ymaps.Polyline(geometry, properties, options);*/

/*map.geoObjects.add(polyline);
    });

    // console.log(geometry);
  };

  xhr.send(null);
}

loadFile();

function getDistHaversinusFormula(lat1, lat2, long1, long2) {
  const R = 6371;
  const lat1Radian = (lat1 * 3.14) / 180;
  const lat2Radian = (lat2 * 3.14) / 180;
  const long1Radian = (long1 * 3.14) / 180;
  const long2adian = (long2 * 3.14) / 180;

  const forSinLat = (lat2Radian - lat1Radian) / 2;
  const forSinLong = (long2adian - long1Radian) / 2;

  const squareRoot =
    (Math.sin(forSinLat) ** 2 +
      Math.cos(lat1Radian) *
        Math.cos(lat2Radian) *
        Math.sin(forSinLong) ** 2) **
    (1 / 2);

  const distance = 2 * R * Math.asin(squareRoot);

  return distance;
}*/
