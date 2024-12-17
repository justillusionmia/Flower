function GrowFlower() {
    const petals = 
        [
        document.getElementById('p1'),
        document.getElementById('p2'), 
        document.getElementById('p3'), 
        document.getElementById('p4'),
        document.getElementById('leaf1'),
        document.getElementById('leaf2')
        ];
        
        petals.forEach((petal, index) => {
          setTimeout(() => {
              petal.style.animationPlayState = 'running'; 
          }, index * 1000); // Delay each petal's start by an increasing amount
      });
    }
