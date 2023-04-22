---
title: "Data Science Pro-Tips: 5 Python Tricks You Must Know"
date: "2023-04-13T22:12:03.284Z"
description: Tips to level up your Data Science game
tag: DataScience
---
As a data scientist, Python is the go-to tool. Its versatility, with a large ecosystem of libraries and rich data manipulation capabilities, makes it a preferred language for data analysis and machine learning. But, are you fully leveraging Python’s potential to optimize your data science workflows?

In this article, I will share with you some of the most practical tips and tricks for data science using Python. Whether you are a beginner looking to level up your Python skills or an experienced data scientist seeking to enhance your productivity, these tips will help you unlock new possibilities in your data science projects.

# Never loop over a dataframe ! Use .apply() instead.

To perform any kind of data transformation, you will eventually need to loop over every row, perform some computation, and return the transformed column.

A common mistake is to use a loop with the built-in  `for`  loop in Python. Please avoid doing that as it can be very slow. The correct way is to use the  `apply`  function in Pandas, ideally combined with a lambda function if your transformation logic is simple, or an external function that you define if the logic is complex.

Here’s an overview of the  `apply`  function with an example using the Titanic dataset:

`gist:tariqmassaoudi/1a30a2a35d35ad429fac8056f5759d01#applyTitanic.py`

![](https://miro.medium.com/v2/resize:fit:258/1*28KTTJxPkzg2MEnCneyj1A.png)

Note that you can use  `apply`  to combine multiple columns from the dataframe, but you need to add  `axis=1`  as an argument to the  `apply`  function. Here's an example using a lambda function and combining two rows,  `price_1`  and  `price_2`, to create a new row  `tot_price`.
```
df["tot_price"] = df.apply(lambda row: row["price_1"]+ row["price_2"], axis=1)
```
# Select specific column types with select_dtypes()

A very common situation is when you have a large DataFrame with multiple columns of different data types, and you need to filter or perform operations only on columns of a specific data type. Pandas provides  `select_dtypes()`  as a convenient function to do that. Let's see an example:

`gist:tariqmassaoudi/4f20a7a7a56bd3942ac1f26cc434d70a#selectdtypes.py`


![](https://miro.medium.com/v2/resize:fit:563/1*z8v0V7n-79DqRIMPxj6aBA.png)

In this example, we are selecting only the numerical columns in the Titanic dataset.

# Use Pandas query() instead of a boolean mask to filter your DataFrame:

Using  `query()`  can make your code shorter and cleaner. Here's a comparison between the two syntaxes
```
# Filter using boolean masks  
  
titanic_df = titanic_df[(titanic_df["Sex"] == "female") & (titanic_df["Age"] > 18)]  
  
# Filter using query()  
  
titanic_df = titanic_df.query('Sex == "female" and Age > 18')
```
Instead of having to write “titanic_df” twice in my mask, using  `query()`  I only had to mention the columns. It achieves the same result while being cleaner and more readable!

# Use list comprehension to create lists in one line:

List comprehension is a concise and powerful technique in Python that allows you to create lists in a single line of code. It provides a concise way to generate new lists by applying an expression to each element in an iterable, such as a list, tuple, or string, and returning the result as a new list. It is shorter and more readable than using a traditional loop.

Here’s the basic syntax:
```
[expression for item in iterable if condition]
```
Here’s an example of using list comprehension to create a list of even numbers from a given list:
`gist:tariqmassaoudi/59479675886a6e72725f5e2d15662b81#even_numbers.py`
```
[2, 4, 6, 8, 10]
```

Keep in mind that you can also create dictionary comprehensions, set comprehensions, and generator comprehensions in Python.

# Enhance Your Loops with enumerate() and zip() in Python:

`enumerate()`  is used to loop over an iterable while keeping track of the index or position of each item. It helps you avoid using an extra variable, like  `i`. The basic syntax for using  `enumerate()`  in a loop is as follows:
```
for index, item in enumerate(iterable):  
    # Do something with index and item
```
Here’s an example:
`gist:tariqmassaoudi/51eb2e161817c94a1b98ef8b3ca40799#enumerate.py`
```
Index: 0, Name: Ali  
Index: 1, Name: Ahmed  
Index: 2, Name: Bob  
Index: 3, Name: Mary
```


`zip()`  is used to combine two or more sequences into a single iterable object that can be looped over in parallel. It helps you avoid using multiple nested loops, making your code cleaner. The basic syntax for using  `zip()`  in a loop is as follows:
```
for item1, item2 in zip(sequence1, sequence2):  
    # Do something with item1 and item2
```
Here’s an example:
`gist:tariqmassaoudi/318a78fd08c45dfc489004b23cf1c8cb#zip.py`
```
Name: Ali, Age: 25 years  
Name: Ahmed, Age: 30 years  
Name: Bob, Age: 35 years  
Name: Mary, Age: 40 years
```
# **Conclusion:**

To sum up, by implementing these top 5 Python tips in your data science projects, you can make your code cleaner and more readable.

I hope that these tips will help you level up as data scientist!

If you managed to get here Congratulations. Thanks for reading, I hope you’ve enjoyed the article. Feel free to reach out to me on  [LinkedIn](https://www.linkedin.com/in/tariqmassaoudi/)  for further discussion or personal contact.