$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
       createPlatform(593, 570, 200, 20, "lime"); 
       createPlatform(800, 470, 200,20 , "blue");
       createPlatform(900, 640,200 , 20 , "yellow"); 
       createPlatform(200, 660, 200, 20, "purple");  
    // TODO 3 - Create Collectables
      createCollectable("steve", 300, 500);
      createCollectable("steve", 900, 400);
      createCollectable("steve", 630, 500);
    
    // TODO 4 - Create Cannons
     createCannon("top", 700, 1000);
     createCannon("right",300, 900);
     createCannon("bottom", 350, 800);
     createCannon("left", 350, 800);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
