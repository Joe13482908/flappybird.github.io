var load_state = {  
    preload: function() { 
        this.game.stage.backgroundColor = '#71c5cf';
        this.game.load.image('bird', 'assets/bird.png');  
        this.game.load.image('pipe', 'assets/pipe.png');  
        this.game.load.audio('jump', 'assets/jump.wav');
    },

    create: function() {
        // Sau khi đã load xong hết assets, chúng ta bắt đầu load state menu
        this.game.state.start('menu');
    }
};