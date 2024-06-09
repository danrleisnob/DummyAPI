// C - R - U - D

// Criar um usuário

async function createUser(){

    const data = {
        "firstName": "Danrlei33",
        "lastName": "Souza",
        "email": "danrleisouza3@gmail.com"
    }

    try {
        const response = await fetch('https://dummyapi.io/data/v1/user/create/', {
            method: 'POST',
            headers: {
                "app-id": "6664d85f45b4dea979b7a938",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
    
        if(!response.ok){
            throw new Error(`Ocorreu um erro na requisição com o servidor ${response.statusText}`)
        }
        return await response.json();

    } catch (error) {
        console.log("Ocorreu um erro favor verique o seu código", error);
        return null;
    }
};

// createUser().then(response =>{
//     if(response){
//         console.log("Usuário criado com sucesso", response);
//     } else{
//         console.log("Erro na criação do usuário");
//     }
// });

// Agora vamos ler nossos usuários

async function getUsers(){
    try {
        const response = await fetch('https://dummyapi.io/data/v1/user?created=1',{
            headers: {
                "app-id": "6664d85f45b4dea979b7a938"
            }
        });
        
        if(!response.ok){
            throw new Error(`Ocorreu um erro na requisição com o servidor ${response.statusText}`)
        }
            
        const data = await response.json();
        console.log(data)
    } catch (error) {
            console.log("Ocorreu um erro favor verique o seu código", error);
            return null;   
    }
}

getUsers();

async function updateUser(){

    const data = {
        "firstName": "Danrlei era 22",
        "lastName": "Souza fui Atualizado",
        "email": "danrleisouza2@gmail.com"
    }

    try {
        const response = await fetch('https://dummyapi.io/data/v1/user/6665cb03f47c6f41e1ab8fc0', {
            method: 'PUT',
            headers: {
                "app-id": "6664d85f45b4dea979b7a938",
                "Content-Type": "application/json",
            },body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error(`Ocorreu um erro na requisição com o servidor ${response.statusText}`)
        }

        return await response.json();
        
    } catch (error) {
        console.log("Ocorreu um erro favor verique o seu código", error);
        return null;
    }
};

// updateUser().then(response=>{
//     if(response){
//         console.log("Usuário atualizado com sucesso", response)
//     }else{
//         console.log("Erro ao atualizar usuário")
//     }
// });


async function deleteUser(){
    try {
        const response = await fetch('https://dummyapi.io/data/v1/user/6665cb03f47c6f41e1ab8fc0',{
            method: 'DELETE',
            headers: {
                "app-id": "6664d85f45b4dea979b7a938",
            }
        });

        if(!response.ok){
            throw new Error(`Ocorreu um erro na requisição com o servidor ${response.statusText}`)
        }
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log("Ocorreu um erro favor verique o seu código", error);
        return null;
    }
}

deleteUser()