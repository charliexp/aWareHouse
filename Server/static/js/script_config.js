var loadData;

$.getJSON("/api/config", function(data) {
  loadData = data;
  for (var key in data.config) {
    if (key === "alerts") {
      for (var keycode in data.config[key]) {
        var sel = "#" + keycode + "";
        $(sel).val(data.config[key][keycode]);
      }
    } else if (key === "arduino") {
      for (var keycode in data.config[key]) {
        var sel = "#" + keycode + "";
        $(sel).val(data.config[key][keycode]);
      }
    } else if (key === "db") {
      for (var keycode in data.config[key]) {
        var sel = "#" + keycode + "";
        $(sel).val(data.config[key][keycode]);
      }
    } else if (key === "forecast") {
      for (var keycode in data.config[key]) {
        var sel = "#" + keycode + "";
        $(sel).val(data.config[key][keycode]);
      }
    }
  }
});

$("#submit").on("click", function() {
  for (var key in loadData.config) {
    if (key === "alerts") {
      for (var keycode in loadData.config[key]) {
        var sel = "#" + keycode + "";
        loadData.config[key][keycode] = $(sel).val();
      }
    } else if (key === "arduino") {
      for (var keycode in loadData.config[key]) {
        var sel = "#" + keycode + "";
        loadData.config[key][keycode] = $(sel).val();
      }
    } else if (key === "db") {
      for (var keycode in loadData.config[key]) {
        var sel = "#" + keycode + "";
        loadData.config[key][keycode] = $(sel).val();
      }
    } else if (key === "forecast") {
      for (var keycode in loadData.config[key]) {
        var sel = "#" + keycode + "";
        loadData.config[key][keycode] = $(sel).val();
      }
    }
  }
  $.ajax({
    type: "POST",
    url: "/api/config",
    data: loadData,
    contentType: 'application/json;charset=UTF-8',
    success: function(result) {
      console.log(result);
    }
  });
});