export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 | 0x8);
    return v.toString(16);
  });
}

export const formatDate = function(date) {
  const d = new Date(date)
  const time = d.toLocaleTimeString()
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}