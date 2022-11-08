export const getList = () => {    
        return fetch("https://assets.breatheco.de/apis/fake/todos/user/arques", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        
    };

export const createTask = (data) => {
        return fetch("https://assets.breatheco.de/apis/fake/todos/user/arques", {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        });
    }

export const changeList = (data) => {
        return fetch("https://assets.breatheco.de/apis/fake/todos/user/arques", {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
    };
