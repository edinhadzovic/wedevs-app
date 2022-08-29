
export const createSlugFromTitle = (title: string, id: string) => {
    return title
        .toLowerCase()
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .replace(/\s+/g, "-") + "-" + id;
}

export const getSlugId = (slug: string) => {
    const id = slug!.split("-").pop();
    return id;
}