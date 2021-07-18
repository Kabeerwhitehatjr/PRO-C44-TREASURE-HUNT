class Security {

    constructor(){

        // Add code to create the input and button elements
        this.access1 = createInput("Code:");
        this.button1 = createButton("Check");
        this.access2 = createInput("Code:");
        this.button2 = createButton("Check");
        this.access3 = createInput("Code:");
        this.button3 = createButton("Check");

        this.access1.position(100, 90);
        this.button1.position(100, 120);
        this.access2.position(700, 190);
        this.button2.position(700, 220);
        this.access3.position(100, 290);
        this.button3.position(100, 320);
  

    }

    display(){

        // Add code to make the buttons function as expected
        
        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1, this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        })

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2, this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        })

        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3, this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        })

             
        

        

    }
}