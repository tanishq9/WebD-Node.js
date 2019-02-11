import sys
import pickle
from sklearn import datasets
from sklearn.linear_model import LogisticRegression

def predict(sl,sw,pl,pw):
      #loading a model from a file called model.pkl
      input = [[sl,sw,pl,pw]]
      #print(input)
      lrmodel = pickle.load(open('model.pkl','rb'))
      print(lrmodel.predict(input)[0])
      #print("Done")

if __name__ == "__main__":
    sl = float(sys.argv[1])
    sw = float(sys.argv[2])
    pl = float(sys.argv[3])
    pw = float(sys.argv[4])
    predict(sl,sw,pl,pw)