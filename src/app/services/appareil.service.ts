export class AppareilService {

    appareils = [
        {
          id : 1,
          name : 'Machine à laver',
          status : 'éteint' 
        },
        {
          id : 2,
          name : 'Frigo',
          status : 'éteint' 
        },
        {
          id : 3,
          name : 'Ordinateur',
          status : 'allumé' 
        }
      ];

    getAppareilById(id: number) {
      const appareil = this.appareils.find(
        (appareilObject) => {
          return appareilObject.id === id;
        }
      );
      return appareil;
    }
    
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

    switchOnOne(i: number ) {
        this.appareils[i].status= 'allumé';
    }

    switchOffOne(i: number) {
        this.appareils[i].status= 'éteint';
    }
  
}