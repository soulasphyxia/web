export function load() {
    if (!localStorage.getItem("storage")) {
        localStorage.setItem("storage", [])
        return [];
    }
    return JSON.parse(localStorage.getItem("storage"));
}

export function save(entity) {
    const storage = load()
    let id = storage.length != 0
        ? Math.max(...storage.map(i => i.id)) + 1
        : 1;

    entity["id"] = id;
    storage.push(entity);
    localStorage.setItem("storage", JSON.stringify(storage))
}


export function find(key, value) {
    const storage = load();
    const filtered = []
    for (let entity of storage) {
        if (entity[key] == value) filtered.push(entity)
    }
    return filtered;
}


export function sort(key, naturalOrder) {
    const storage = load();
    if (naturalOrder) {
        return storage.sort((a, b) => {
            return a[key] < b[key]
                ? -1
                : a[key] > b[key]
                    ? 1
                    : 0
        })
    } else {
        return storage.sort((a, b) => {
            return a[key] > b[key]
                ? -1
                : a[key] < b[key]
                    ? 1
                    : 0
        })
    }
}

