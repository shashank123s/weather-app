export const base64 = {
    encode(text: string) {
        return btoa(text);
    },
    decode(text: string) {
        return atob(text);
    }
}
