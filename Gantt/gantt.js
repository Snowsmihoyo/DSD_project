google.charts.load('current', { 'packages': ['gantt'] });
google.charts.setOnLoadCallback(drawChart);

function daysToMilliseconds(days) {
    return days * 24 * 60 * 60 * 1000;
}

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Task ID');
    data.addColumn('string', 'Task Name');
    data.addColumn('date', 'Start Date');
    data.addColumn('date', 'End Date');
    data.addColumn('number', 'Duration');
    data.addColumn('number', 'Percent Complete');
    data.addColumn('string', 'Dependencies');
    data.addRows([
        ['RA1', 'First Round of Requirement Analysis',
            new Date(2023, 3, 19), new Date(2023, 3, 23), null, 100, null],
        ['RA2', 'Second Round of Requirement Analysis',
            new Date(2023, 3, 23), new Date(2023, 3, 30), null, 100, null],
        ['SD1', 'Software Design and model select',
            new Date(2023, 3, 31), new Date(2023, 4, 6), null, 100, 'RA1,RA2'],
        ['CODE1', 'Coding for Models and Interface',
            new Date(2023, 4, 7), new Date(2023, 4, 16), null, 100, 'SD1'],
        ['TEST1', 'Testing and Performance comparison of various models',
            new Date(2023, 4, 14), new Date(2023, 4, 20), null, 30, 'SD1,CODE1'],
        ['TEST2', 'System Integration Testing',
            new Date(2023, 4, 21), new Date(2023, 4, 27), null, 0, 'CODE1,TEST1'],
    ]);

    var options = {
            height: 275
        };
    var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

    chart.draw(data, options);
}
