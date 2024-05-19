import city from './city.js';
export default function getCityIdToName(cityId) {
  return city?.["city_list"]?.[`${cityId}`];
}