export function generateId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    const length = 8;
    let result = '';
    
    for (let i = 0; i < length; i ++) {
        result += chars[Math.random() * (chars.length - 1)];
    }

    return result;
}