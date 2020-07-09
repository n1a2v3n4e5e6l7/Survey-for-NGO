class Form {

    constructor() {
        this.input = createInput("Enter Name");
        this.email = createInput("Enter Email");
        this.button = createButton('Submit');
        this.greeting = createElement('h2');
        this.text = createElement('h1', "Survey on setting up a community garden in school");
        this.question1 = createElement('h3', "Q1. Do you think our school should create a community garden to grow organic produce?");
        this.radio = createRadio('h3');
        this.radio.option('yes');
        this.radio.option('No');
        this.question4 = createElement('h3', "Q3. Do you think that the produce from this garden should be sold or used in the cafeteria?");
        this.radio3 = createRadio('h3');
        this.radio3.option('It should be sold');
        this.radio3.option('It should go to the cafeteria');
        this.question2 = createElement('h3', "Q2. Would you be willing to volunteer after-school or in breaks to help tend to this garden?");
        this.radio1 = createRadio('h3');
        this.radio1.option('yes');
        this.radio1.option('No');
        this.question3 = createElement('h3', "Q3. Would you be willing to contribute a small amount of money to this project?");
        this.radio2 = createRadio('h3');
        this.radio2.option('yes');
        this.radio2.option('No');
    }


    display() {
        this.input.position(650, 165)
        this.email.position(650, 105)
        this.button.position(700, 650)
        this.greeting.position(500, 105)
        this.text.position(400, 5)
        this.question1.position(400, 230)
        this.radio.position(500, 290)
        this.question2.position(400, 320)
        this.radio1.position(500, 380)
        this.question3.position(400, 410)
        this.radio2.position(500, 470)
        this.question4.position(400, 510)
        this.radio3.position(500, 560)

        this.button.mousePressed(() => {
            User.input = this.input.value();
            User.email = this.email.value();
            peopleCount++;
            User.index = peopleCount;
            user.update();
            user.updateCount(peopleCount);
        });

    }
}