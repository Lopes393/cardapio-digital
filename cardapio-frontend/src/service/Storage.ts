export function Storage(key: string, dados: any = null, isRefresh: boolean = false, clear: boolean = false) {
    
    if (clear) {
        localStorage.removeItem(key);
        return;
    }

    if (isRefresh) {
        localStorage.removeItem(key);
    }

    if (dados) {
        localStorage.setItem(key, JSON.stringify(dados));

        return true;
    } else {
        const item = localStorage.getItem(key);
        if (item) {
            return JSON.parse(item);
        }
    }

    return false;
}