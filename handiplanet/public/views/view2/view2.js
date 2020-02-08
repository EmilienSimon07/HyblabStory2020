
class View2 extends View {
    static titre = 'Visionner les photos';
    constructor(receiver){
        super('view2', receiver);
    }
    
    linkElements(){
        setBackgroundColor('#ffffff');
        showSplash();
        this.btFree = document.getElementById('button-hotel-a');
        this.btFree.addEventListener('click', ()=>{
            this.switchToViewFree();
        });
        this.btPremium = document.getElementById('button-hotel-b');
        this.btPremium.addEventListener('click', ()=>{
            this.switchToViewPremium();
        });
    }

    async switchToViewFree() {
        transitionHorizontal(this.view, View3Free);
    }

    async switchToViewPremium() {
        transitionHorizontal(this.view, View3Premium);
    }
}