var API_PATH = "http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=2469b4d7-3c71-42a3-be1e-83225c411e0b";

function getData(cb) {
  $.ajax({
    url : API_PATH,
    method : "GET",
    success : function(data) {
      cb(null, data);
    },
    error : function(err) {
      cb(err);
    }
  });
}