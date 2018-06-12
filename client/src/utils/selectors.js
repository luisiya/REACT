export const getVisibleHeroes = (users, filter, idFromSquad) =>

 users.filter(user => user.name.includes(filter) && idFromSquad ? !idFromSquad.includes(user.id) : 0);


export const getVisibleSquad = (users, idFromSquad) =>

users.filter(user => idFromSquad.includes(user.id));



