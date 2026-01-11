import math
class IsPrime:
  def sol1(self, n: int) -> bool:
    if n == 1:
      return False
    if n <= 3:
      return True
      
    sqrt_n = int(math.sqrt(n))
    # print(f"{n}: rt {sqrt_n}")
    dividers = range(2, sqrt_n+1) # +1 because range avoids the last
  
      
    for i in dividers:
      # print(f"divider {i}")
      if n % i == 0:
        return False
    return True


  def sol2(self, n: int) -> bool:
    # 1 is not prime
    if n == 1:
      return False
    
    if n <= 3:
      return True

    # if it's even its not prime
    if n % 2 == 0:
      return False
      
    sqrt_n = int(math.sqrt(n))
    # print(f"{n}: rt {sqrt_n}")

    # +1 because range avoids the last
    # starting from 3 if step is 2 we avoid checking all evens
    dividers = range(3, sqrt_n+1, 2) 
    
  
    for i in dividers:
      # print(f"divider {i}")
      if n % i == 0:
        return False
    return True