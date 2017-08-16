import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from './student';

export class StudentService implements InMemoryDbService {
	createDb() {
		let students = [
		  	new Student("Kim", "Green", 10),
		  	new Student("Long", "Blue", 11),
		  	new Student("Elisha", "Yellow", 3),
		  	new Student("Phuc", "Black", 8),
		  	new Student("Eric", "Blue", 4)		
		];
		return students;
	}
}