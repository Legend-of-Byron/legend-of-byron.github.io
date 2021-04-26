export const shouldReload = (key: string, updatedAt: Date): boolean => {
    const previousUpdateTime = Number(localStorage.getItem(key));
    const currentUpdateTime = updatedAt.getTime();
    
    if(previousUpdateTime !== currentUpdateTime) {
        localStorage.setItem(key, '' + currentUpdateTime);
        return true;
    }

    return false;
}