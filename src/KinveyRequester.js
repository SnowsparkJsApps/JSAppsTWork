import $ from 'jquery';

const KinveyRequester = (function() {
    const baseUrl = "https://baas.kinvey.com/";
    const appKey = "kid_Bkfe6RMXl";
    const appSecret = "4c78eb24aef349fd8fb0146ffe0c50e1";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " + btoa(appKey + ":" + appSecret),
    };

    function loginUser(username, password) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appKey + "/login",
            headers: kinveyAppAuthHeaders,
            data: { username, password }
        });
    }

    function registerUser(username, password) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appKey + "/",
            headers: kinveyAppAuthHeaders,
            data: { username, password }
        });
    }

    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
        };
    }

    function logoutUser() {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appKey + "/_logout",
            headers: getKinveyUserAuthHeaders(),
        });
    }

    function findAllBooks() {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey + "/books",
            headers: getKinveyUserAuthHeaders()
        });
    }

    function getByID(id) {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey + "/books/"+id,
            headers: getKinveyUserAuthHeaders()
        });
    }
    function findBookById(bookId) {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey + "/books/" + bookId,
            headers: getKinveyUserAuthHeaders()
        });
    }

    function createBook(title, author, description) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "appdata/" + appKey + "/books",
            headers: getKinveyUserAuthHeaders(),
            data: { title, author, description }
        });
    }

    function editBook(bookId, title, author, description) {
        return $.ajax({
            method: "PUT",
            url: baseUrl + "appdata/" + appKey + "/books/" + bookId,
            headers: getKinveyUserAuthHeaders(),
            data: { title, author, description }
        });
    }

    function deleteBook(bookId) {
        return $.ajax({
            method: "DELETE",
            url: baseUrl + "appdata/" + appKey + "/books/" + bookId,
            headers: getKinveyUserAuthHeaders()
        });
    }

    return {
        loginUser, registerUser, logoutUser,
        findAllBooks, createBook, findBookById, editBook, deleteBook
    }
})();

export default KinveyRequester;
