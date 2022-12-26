

const URL = 'https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-PT/'

export const fetchPosts = async () => {
    const resp = await fetch(`${URL}posts`)
    const data = await resp.json()
    return data
}

export const creatPost = async ({ title, description, price, location }) => {
    const resp = await fetch(`${URL}posts`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`

        },
        body: JSON.stringify({
            post: {
                title: `${title}`,
                description: `${description}`,
                price: `${price}`,
                location: `${location}`,
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
    catch (e) {
        console.log('hi')
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
    catch (e) {
        console.log(e)
    }
}

export const deletePost = async (postId) => {
    try {
        const resp = await fetch(`${URL}/posts/${postId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        const data = await resp.json()

        console.log(data);

    } catch (e) {
        console.log(e)
    }

}

export const editPost = async (postId, title, description, price, location = '[On Request]') => {
    try {
        const resp = await fetch(`${URL}posts/${postId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                post: {
                    title: `${title}`,
                    description: `${description}`,
                    price: `${price}`,
                    location: `${location}`,
                    willDeliver: true,
                    active: false
                }
            })
        })
        const data = await resp.json()
        console.log(data)
        return data;

    } catch (e) {
        console.log(e)
    }
};

export const search = async (string) => {
    try {
        const array = []
        const inputArray = string.toLowerCase().split(' ')
        console.log(inputArray)
        const data = await fetchPosts()
        data.data.posts.map(post => post.title.toLowerCase().split(' ').map(word => inputArray.includes(word) ? array.push(post) : null))
        return array
    } catch (e) {
        console.log(e)

    }

}

export const postMessage = async (id, message) => {
    try {
        const resp = await fetch(`${URL}/posts/${id}/messages`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                message: {
                    content: `${message}`
                }
            })
        })
        const data = await resp.json()

        console.log(data);

    } catch (e) {

    }
}

export const username = localStorage.getItem('user')