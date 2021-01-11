import { Order, RequestSortHandler } from '../hooks/useSort';

export default function createSortHandler(onRequestSort:RequestSortHandler, orderBy:string, defaultOrder?:Order) {
	return () => onRequestSort(orderBy, defaultOrder);
}