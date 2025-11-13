// const githubApiURL = "https://api.github.com/users/Kantares77/repos";

// export const getRepositories = async () => {
//     const response = await fetch(githubApiURL);

//     if (!response.ok) {
//         throw new Error(response.statusText);
//     }

//     return await response.json();
// };

export const getRepositories = async (api) => {
    const response = await fetch(api);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
};