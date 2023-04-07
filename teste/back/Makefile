.PHONY: up
up:
	docker-compose up -d

down:
	docker-compose down
	

logs:
	docker-compose logs -f app

bash:
	docker-compose exec app bash
	

build:
	npm run build

ps:
	docker-compose ps