import { Api } from '@constants';
import httpService from './httpService';

export const AddressService = httpService.factory(Api.ADDRESS);
