export class AppareilService {

    appareils = [
        {
          name : 'Machine à laver',
          status : 'éteint' 
        },
        {
          name : 'Frigo',
          status : 'éteint' 
        },
        {
          name : 'Ordinateur',
          status : 'allumé' 
        }
      ];
    
    switchOnAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'allumé';
            console.log(appareil);
        }
    }

    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'éteint';
            console.log(appareil);
        }
    }
  
}