// services/authService.js

const users = [
    { username: 'admin', password: 'admin123' }, // Usuarios simulados
    { username: 'user', password: 'user123' }
  ];
  
  export const login = (username, password) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } else {
      throw new Error('Invalid username or password');
    }
  };
  
  export const logout = () => {
    localStorage.removeItem('user');
  };
  
  export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
  };
  