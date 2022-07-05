export function storeCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    // console.log(user, 'what goes into storage')
  }
  
  export function getCurrentUser() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    // console.log(user, 'JSON')
    return user;
  }
  
  export function clearCurrentUser() {
    localStorage.removeItem('currentUser');
  }