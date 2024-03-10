import re
import sys
import typing as tp


class StringTransformer:
    def get_str_transformed(self, string: str) -> str:
        result = string
        result = self._get_str_remove_trailing_white_spaces(result)
        result = self._get_str_remove_undesired_characters(result)
        result = self._get_str_replace_undesired_characters(result)
        result = self._get_str_modify_spaces(result)
        result = self._get_str_lowercase(result)
        result = self._get_str_remove_accents(result)
        result = self._get_str_remove_duplicated_characters(result)
        return result

    def _get_str_remove_trailing_white_spaces(self, string: str) -> str:
        return string.strip()

    def _get_str_remove_undesired_characters(self, string: str) -> str:
        undesired_chararacters = ["[", "]"]
        replacements = { undesired_chararacter: "" for undesired_chararacter in undesired_chararacters}
        return self._get_str_replace_characters(string, replacements)

    def _get_str_replace_undesired_characters(self, string: str) -> str:
        replacements = {
            ".": "-"
        }
        return self._get_str_replace_characters(string, replacements)

    def _get_str_replace_characters(self, string: str, replacements: tp.Dict[str, str]) -> str:
        result = string
        for old_character, new_character in replacements.items():
            result = result.replace(old_character, new_character)
        return result 


    def _get_str_modify_spaces(self, string: str) -> str:
        result = re.sub(rf'\s+', "-", string)
        return result 

    def _get_str_lowercase(self, string: str) -> str:
        return string.lower()
    
    def _get_str_remove_accents(self, string: str) -> str:
        replacements = {
            "á": "a",
            "é": "e",
            "í": "i",
            "ó": "o",
            "ú": "u",
        }
        return self._get_str_replace_characters(string, replacements)

    def _get_str_remove_duplicated_characters(self, string: str) -> str:
        result = string
        characters_to_remove_duplicates = ["\.", "-"]
        for char in characters_to_remove_duplicates:
            result = re.sub(rf'{char}+', char, result)
        return result 


def get_user_input_converted() -> str:
    user_input = get_user_input_as_str()
    return StringTransformer().get_str_transformed(user_input)


def get_user_input_as_str() -> str:
    user_input = sys.argv[1:]
    result = ' '.join(user_input)
    return result


def test():
    user_input = " [[]]ABCÍí.abc - a 3    "
    result = StringTransformer().get_str_transformed(user_input)
    print(f"`{user_input}` -> `{result}`")
    assert "abcii-abc-a-3" == result 


if __name__ == "__main__":
    #test()
    print(get_user_input_converted())

