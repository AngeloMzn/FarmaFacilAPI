import { addressDao } from "../../dao/AddressDao";

interface Address {
    uf: string;
    cep: string;
    city: string;
    street: string;
    number: string;
    type: string;
    complement: string;
    userId: Promise<number>;
}
class CreateAddressAction{
    public createAddress(address: Address){
        return addressDao.createAddress(address);
    }   
}
export const createAddressAction = new CreateAddressAction();