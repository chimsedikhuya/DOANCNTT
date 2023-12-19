function resign_open() {
    document.getElementById("rsn").style.display = "flex";
  }
  
function resign_close() {
    document.getElementById("rsn").style.display = "none";
  }

function login_open() {
    document.getElementById("lg").style.display = "flex";
  }
  
function login_close() {
    document.getElementById("lg").style.display = "none";
  }

function resign_to_login() {
    document.getElementById("lg").style.display = "flex";
    document.getElementById("rsn").style.display = "none";
  }

function login_to_resign() {
  document.getElementById("rsn").style.display = "flex";
  document.getElementById("lg").style.display = "none";
}

function modal_open() {
  document.getElementById("md").style.display = "block";
}

function open_admin() {
  document.getElementById("adm").style.display = "block";
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function add_area() {
  document.getElementById("aa").style.display = "grid";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



// file-input
const dropArea = document.querySelector(".drop_box"),
  button = dropArea.querySelector("button"),
  dragText = dropArea.querySelector("header"),
  input = dropArea.querySelector("input");
let file;
let filename;

button.onclick = () => {
  input.click();
};

input.addEventListener("change", function (e) {
  let fileName = e.target.files[0].name;
  let filedata = `
    <form action="" method="post">
    <div class="form">
    <h4>${fileName}</h4>
    <input type="email" placeholder="Enter email upload file">
    <button class="btn">Upload</button>
    </div>
    </form>`;
  dropArea.innerHTML = filedata;
});

// TIME
            // Khai báo đối tượng Date
            var date = new Date().toLocaleString("en-US", {timeZone: "Asia/Ho_Chi_Minh"});
            date = new Date(date);

            // Lấy số thứ tự của ngày hiện tại
            var thu = date.getDay();
            var ngay = date.getDate();
            var thang = date.getMonth();

            // Biến lưu tên của thứ
            var day_name = '';

            // Lấy tên thứ của ngày hiện tại
            switch (thu) {
            case 0:
                day_name = "Chủ nhật";
                break;
            case 1:
                day_name = "Thứ hai";
                break;
            case 2:
                day_name = "Thứ ba";
                break;
            case 3:
                day_name = "Thứ tư";
                break;
            case 4:
                day_name = "Thứ năm";
                break;
            case 5:
                day_name = "Thứ sau";
                break;
            case 6:
                day_name = "Thứ bảy";
            }

            document.getElementById('thu').innerHTML = day_name;
            document.getElementById('ngay').innerHTML = ngay;
            document.getElementById('thang').innerHTML = 'Tháng '+thang;





function ShowMap(latitude, longitude) {
  console.log("This is latitude :" + latitude);
  console.log("This is longitude :" + longitude);

  let myCenter = new google.maps.LatLng(latitude, longitude);
 

  function initialize() {
      let mapProp = {
          center: myCenter,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      let map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

      let marker = new google.maps.Marker({
          position: myCenter,
          animation: google.maps.Animation.BOUNCE
      });

      marker.setMap(map);
  }

  initialize();
}


