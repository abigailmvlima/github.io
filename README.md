# Traveller

## Integrantes
  - Abigail Lima      - RM96351
  - Kaique Bernardo   - RM96395

## Repositório github site
  - https://github.com/abigailmvlima/traveller

<img width="1296" alt="image" src="https://user-images.githubusercontent.com/81816418/229257267-0e909b91-6d33-4328-b3d6-7b9d5b0ccc93.png">

## Publicação site no github.io
  - https://abigailmvlima.github.io/gullivertravell/


<img width="1233" alt="image" src="https://user-images.githubusercontent.com/81816418/229256688-af372c3b-bd66-41da-ae58-49e90d5031e0.png">


## Tripadvisor APi 
https://tripadvisor-content-api.readme.io/reference/overview

A API do Tripadvisor é uma interface de programação de aplicativos (API, na sigla em inglês) fornecida pelo Tripadvisor, que permite que desenvolvedores integrem dados e recursos do site do Tripadvisor em seus próprios aplicativos e sites.
A API fornece acesso aos dados do Tripadvisor, incluindo informações sobre hotéis, restaurantes, atrações turísticas, bem como comentários, avaliações e fotos de usuários. Com a API, os desenvolvedores podem criar aplicativos e serviços personalizados, como agregadores de avaliações, guias turísticos, aplicativos móveis de reservas de viagens e muito mais.

<img width="906" alt="image" src="https://user-images.githubusercontent.com/81816418/229257115-92bc0490-c9ad-4533-9190-08fa9df63fce.png">

## Function Lambda para segurança das credenciais
Lambda é um serviço de computação sem servidor da AWS que permite executar código em resposta a eventos sem precisar gerenciar servidores ou infraestrutura. Ao usar o Lambda, não precisa se preocupar com capacidade, escalabilidade, disponibilidade ou manutenção de servidores. Em vez disso, a AWS cuida de tudo isso para você.

1. Custo: Com o Lambda, você paga apenas pelo tempo que sua função leva para ser executada, sem se preocupar com o tempo de inatividade ou capacidade não utilizada. Isso pode ser muito mais econômico do que manter sua própria infraestrutura ou usar servidores em nuvem tradicionais.
2. Escalabilidade: O Lambda se dimensiona automaticamente para lidar com a carga de trabalho, portanto, você não precisa se preocupar com a capacidade ou escalabilidade de seus servidores.
3. Sem servidor: Ao não precisar gerenciar servidores, você pode se concentrar em escrever e melhorar o código de sua aplicação, em vez de se preocupar com a infraestrutura.
4. Integração com outros serviços da AWS: O Lambda se integra perfeitamente com outros serviços da AWS, permitindo que você construa aplicativos altamente escaláveis e resistentes.

Resumindo, o Lambda é uma excelente opção se você deseja executar código em resposta a eventos de maneira eficiente, econômica e sem se preocupar com a administração de servidores.

## Collection Postman
  - Download:https://github.com/abigailmvlima/traveller/blob/main/API-Traveller.postman_collection.json
  
https://p7167519uh.execute-api.us-east-1.amazonaws.com/dev/search?searchQuery=hotel&category=hotels&latLong=-23.537430585909647%252C%2520-46.51669981349255&language=pt-br
<img width="1815" alt="image" src="https://user-images.githubusercontent.com/81816418/229255441-37df5025-ff88-4db8-af7e-7fb33cec6e4c.png">

https://p7167519uh.execute-api.us-east-1.amazonaws.com/dev/search/photos?location_id=2406720
<img width="1823" alt="image" src="https://user-images.githubusercontent.com/81816418/229255556-470ee252-1fd2-4fbc-affe-e3fb4e0a4d03.png">

https://p7167519uh.execute-api.us-east-1.amazonaws.com/dev/location/reviews?location_id=2406720
<img width="1830" alt="image" src="https://user-images.githubusercontent.com/81816418/229255596-c4929bf2-32a1-456a-a890-a426aaac9cd6.png">

https://p7167519uh.execute-api.us-east-1.amazonaws.com/dev/search/nearby?latLong=-23.53752894777355%2C%20-46.51669981349255&language=pt
<img width="1831" alt="image" src="https://user-images.githubusercontent.com/81816418/229255615-0f6528b4-1c42-4575-a4dc-980149eed9a4.png">

https://p7167519uh.execute-api.us-east-1.amazonaws.com/dev/details?location_id=2406720
<img width="1831" alt="image" src="https://user-images.githubusercontent.com/81816418/229255636-2f357d06-ac13-45af-8959-739ed4f22922.png">

## Sobre o codigo fonte

<img width="898" alt="image" src="https://user-images.githubusercontent.com/81816418/229256864-12b4535a-3e85-4ef7-a490-d8a8af19ef97.png">

<img width="908" alt="image" src="https://user-images.githubusercontent.com/81816418/229256872-a5c15ab7-92f5-44c2-9505-9343f8b9ff10.png">

<img width="906" alt="image" src="https://user-images.githubusercontent.com/81816418/229256880-5e8b189f-3b13-481f-8623-7132ce6d723a.png">

## Deploy Servidor
  - yarn serverless deploy

## Rodar lanbda local
  - yarn serverless offiline


<img width="907" alt="image" src="https://user-images.githubusercontent.com/81816418/229256899-d9d20e13-7457-417d-b770-eaaf3c32004d.png">


<img width="908" alt="image" src="https://user-images.githubusercontent.com/81816418/229257098-e23eb37e-beee-4f29-abff-b2bfbb01b11d.png">







