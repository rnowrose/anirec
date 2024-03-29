from model import ORM

class AnimeUitl(ORM):
    @classmethod
    def get_by_anime_id(cls, anime_id):
        with cls.db_conn as conn:
            cur = conn.cursor()
            sql = f'select * from {cls.tablename} where anime_id=%s'
            cur.execute(sql, [anime_id])
            return cur.fetchall()


class AnimeEpisodes(AnimeUitl, ORM):
    tablename = 'anime_episodes'
    columns = ['name', 'url', 'site', 'anime_id']

    def __init__(self, name, url, site, anime_id, id=None):
        self.name = name
        self.url = url
        self.site = site
        self.anime_id = anime_id
        self.id = id
    
    @classmethod
    def get_episode(cls, name, url, site):
        with cls.db_conn as conn:
            cursor = conn.cursor()
            sql = f"select * from {cls.tablename} where name=%s and url=%s and site=%s"
            cursor.execute(sql, [name, url, site])
            return cursor.fetchone()
            

class AnimeTag(AnimeUitl, ORM):
    tablename = 'anime_tag' 
    columns = ['tag_id', 'anime_id']

    def __init__(self, tag_id, anime_id):
        self.tag_id = tag_id
        self.anime_id = anime_id
    

class AnimeGenre(AnimeUitl, ORM):
    tablename = 'anime_genre'
    columns = ['name', 'anime_id']

    def __init__(self, name, anime_id, id=None):
        self.name = name
        self.anime_id = anime_id
        self.id = id

    @classmethod
    def get_all_genres(cls):
         with cls.db_conn as conn:
            cursor = conn.cursor()
            sql = f"select distinct(name) from {cls.tablename}"
            cursor.execute(sql)
            return cursor.fetchall()

class AnimeStudio(AnimeUitl, ORM):
    tablename= 'anime_studio'
    columns = ['anime_id', 'studio_name']

    def __init__(self, anime_id, studio_name, id=None):
        self.anime_id = anime_id
        self.studio_name = studio_name
        self.id = id
    
    @classmethod
    def get_all_studios(cls):
         with cls.db_conn as conn:
            cursor = conn.cursor()
            sql = f"select distinct(studio_name) from {cls.tablename}"
            cursor.execute(sql)
            return cursor.fetchall()
    
class AnimeCharacter(AnimeUitl, ORM):
    tablename = 'anime_character'
    columns = ['anime_id', 'character_id']

    def __init__(self, anime_id, character_id, id=None):
        self.anime_id = anime_id
        self.character_id = character_id
        self.id = id

    @classmethod
    def get_by_anime_character(cls, anime_id, character_id):
        with cls.db_conn as conn:
            cursor = conn.cursor()
            sql = f"select * from {cls.tablename} where anime_id=%s and character_id=%s"
            cursor.execute(sql, [anime_id, character_id])
            return cursor.fetchone()
        



