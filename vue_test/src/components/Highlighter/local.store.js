class LocalStore {
    constructor(id) {
        this.key = id !== undefined ? `highlight-mengshou-${id}` : 'highlight-mengshou';
    }
    // 从location中获取保存的高亮信息
    storeToJson() {
        const store = localStorage.getItem(this.key);
        let sources;
        try {
            sources = JSON.parse(store) || [];
        }
        catch (e) {
            sources = [];
        }
        return sources;
    }

    // 将高亮数据保存到location中
    jsonToStore(stores) {
        localStorage.setItem(this.key, JSON.stringify(stores));
    }

    // 将高亮数据做处理再转成json字符串的格式
    save(data) {
        const stores = this.storeToJson();
        const map = {};
        stores.forEach((store, idx) => {map[store.hs.id] = idx});

        if (!Array.isArray(data)) {
            data = [data];
        }

        data.forEach(store => {
            // 更新，如果该条高亮数据已经存在，则修改该条数据的高亮信息
            if (map[store.hs.id] !== undefined) {
                stores[map[store.hs.id]] = store;
            }
            // 添加，如果该条高亮数据还不存在，新增一条高亮数据
            else {
                stores.push(store);
            }
        })
        this.jsonToStore(stores);
    }

    forceSave(store) {
        const stores = this.storeToJson();
        stores.push(store);
        this.jsonToStore(stores);
    }

    remove(id) {
        const stores = this.storeToJson();
        let index = null;
        for (let i = 0; i < stores.length; i++) {
            if (stores[i].hs.id === id) {
                index = i;
                break;
            }
        }
        if (index !== null) {
            stores.splice(index, 1);
            this.jsonToStore(stores);
        }
    }

    getAll() {
        return this.storeToJson();
    }

    removeAll() {
        this.jsonToStore([]);
    }
}

export default LocalStore;