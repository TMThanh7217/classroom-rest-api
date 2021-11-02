/*
    nghiệp vụ tương tác với resource, gọi model nếu cần tương tác cơ sở dữ liệu
*/

//const classrooms = require('../mock');
const classrooms = require('./data.json');

exports.list = () => classrooms;
exports.detail = (id) => classrooms.find(classroom => classroom.id === id);
exports.create = (classroom) => {
    classroom.id = classrooms.length + 1;
    classrooms.push(classroom);
    return classroom.id;
}