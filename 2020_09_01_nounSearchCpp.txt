#include <iostream>
#include <cmath>
#include <cstdio>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;
/*

Write a function which takes a tweet and returns an array of nouns

Example:
"I love pecan pie and ice cream" -> ["I", "pecan", "pie", "ice", "cream"]
 N  V    N    N   O   N    N

You are given a magic "partOfSpeech" function which accepts a word as input, and returns a part of speech. For this problem, we will assume there are only four kinds of words: Noun, Verb, Adjective, or Other.

Examples:
partOfSpeech("fresh") -> "A"
partOfSpeech("pecan") -> "N"
partOfSpeech("love") -> "V"
partOfSpeech("and") -> "O"

*/

// std::vector<string> ;

// I love pecan pie and ice cream
// 0123456789...

// str.at(i);

// myString.append(anotherString)

int main()
{
    cout << "code start" << endl;
    
    std::string initial = "I am the phrase you are looking for";
    int sLength = initial.length();
    
    vector<std::string> phrase;
    
    std::string word;
    
    for(int i = 0; i <= sLength; i++)
    {
        if (initial[i] != ' ')
        {
            string s(1, initial[i]);
            word.append(s);
            
            // cout << initial[i] << endl;
            //cout << "Greetings" << endl;
        }
        else
        {
            //cout << "Hello" << endl;
            // place word in phrase
            phrase.push_back (word);
            
            // clear word
            word.clear();
        }
        
    }
    phrase.push_back (word);
    
    //cout << word << endl;
    
    int vLength = phrase.size();
    
    for (int i = 0; i < vLength; i++)
    {
        cout << phrase[i] << endl;
    }

    return 0;
}