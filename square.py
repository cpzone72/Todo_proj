import sys

def main():
    try:
        user_input = input("숫자를 입력하세요: ")
        number = float(user_input)
        result = number ** 2
        print(f"{number}의 제곱은 {result}입니다.")
    except ValueError:
        print("오류: 유효한 숫자를 입력해 주세요.")

if __name__ == "__main__":
    main()
