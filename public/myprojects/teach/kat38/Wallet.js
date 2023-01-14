class Wallet {
    constructor(money){
    let _money = money;
    
    this.getWalletValue = () => _money; //pobieramy zawartość portfela

    this.checkCanPlay = value =>{
        if(_money >= value && value > 0) return true;
        return false;
    }
    
    this.changeWallet = (value, type = '+') => {
        if(typeof value === 'number' && !isNaN(value)){
            if(type === '+'){
                return _money += value;
            } else if (type === '-'){
                return _money -= value;
            } else throw new Error("Nieprawidłowy typ działania!");
        }else{
            console.log(typeof value);
            throw new Error("Nieprawdłowa liczba!");
        }
    } 
    }
}