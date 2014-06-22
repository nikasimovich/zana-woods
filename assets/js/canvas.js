<canvas width='auto' height='auto' id='canvas'></canvas>
<script>
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(25, 15);
    context.lineTo(100, 100);

    context.stroke();


</script>