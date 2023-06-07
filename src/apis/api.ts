export function fetchDetail(characterId: string) {
    return fetch(
      `https://disney_api.nomadcoders.workers.dev/characters/${characterId}`
    ).then((res) => res.json());
  }
  
  export function fetchCharacter() {
    return fetch(
      "https://disney_api.nomadcoders.workers.dev/characters"
    ).then((res) => res.json());
  }
  