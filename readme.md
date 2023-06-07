Rota (https://localhost:3333/user) -> Controller -> Usecase -> Repository -> Datasource (Retorna uma model que vem da request)
Datasource (Retorna a model para) -> Repository -> Usecase -> Controller -> Retorno da request

1. entity -> domain
2. model -> data
3. datasource -> data
4. repository -> domain e data
5. usecase -> domain
6. inject
7. router
