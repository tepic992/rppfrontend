import { NacionalnostModel } from './nacionalnost.model';
import { TimModel } from './tim.model';
export class IgracModel {

    id: number;
	ime: string;
	nacionalnost: NacionalnostModel;
	tim: TimModel;
	prezime: string;
	brojReg: string;
	datumRodjenja: Date;
}
