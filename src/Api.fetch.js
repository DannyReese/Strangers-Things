

const URL = 'https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-PT/'

export const fetchPosts = async () => {
    const resp = await fetch(`${URL}posts`)
    const data = await resp.json()
    return data
};

export const creatPost = async ({ title, description, price, token }) => {
    const resp = await fetch(`${URL}posts`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`

        },
        body: JSON.stringify({
            post: {
                title: `${title}`,
                description: `${description}`,
                price: `${price}`,
                willDeliver: true
            }
        })
    })

    const data = await resp.json()

    return data
}

export const creatAccount = async (username, password) => {
    try {
        const resp = await fetch(`${URL}users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: `${username}`,
                    password: `${password}`
                }
            })
        })
        const data = await resp.json()

        console.log(data);

    }
    catch (e) {
        console.log(e)
    }
}



export const login = async (username, password) => {
    try {
        const resp = await fetch(`${URL}users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: `${username}`,
                    password: `${password}`
                }
            })
        })
        const data = await resp.json()
        localStorage.setItem('user', username)
        localStorage.setItem('token', data.data.token)
        return data;
    }
    catch (error) {
        console.log(error)
    }
}

export const profile = async () => {
    try {
        const resp = await fetch(`${URL}users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })
        const data = await resp.json()

        return data;
    }
    catch (e){
        console.log(e)
    }
} 