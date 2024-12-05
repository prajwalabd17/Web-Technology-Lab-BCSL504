// Function to handle AJAX request without jQuery
document.getElementById('loadText').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'textfile.txt', true);
    xhr.onload = function() {
        if (this.status === 200) {
            document.getElementById('textContent').innerText = this.responseText;
        } else {
            document.getElementById('textContent').innerText = 'Error loading text file.';
        }
    };
    xhr.send();
});

// Function to handle AJAX request with jQuery
document.getElementById('loadTextJQuery').addEventListener('click', function() {
    $.ajax({
        url: 'textfile.txt',
        method: 'GET',
        success: function(data) {
            $('#textContentJQuery').text(data);
        },
        error: function() {
            $('#textContentJQuery').text('Error loading text file.');
        }
    });
});

// Function to load JSON data using getJSON
document.getElementById('loadJSON').addEventListener('click', function() {
    $.getJSON('data.json', function(data) {
        $('#jsonContent').html('<pre>' + JSON.stringify(data, null, 2) + '</pre>');
    }).fail(function() {
        $('#jsonContent').text('Error loading JSON data.');
    });
});

// Function to parse JSON data using parseJSON
document.getElementById('parseJSON').addEventListener('click', function() {
    var jsonString = '{"name": "John", "age": 30, "city": "New York"}';
    var jsonData = $.parseJSON(jsonString);
    $('#parsedContent').html('Name: ' + jsonData.name + '<br>Age: ' + jsonData.age + '<br>City: ' + jsonData.city);
});