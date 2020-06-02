import jpype
import sheet
from konlpy.tag import Kkma
from gensim.models.doc2vec import Doc2Vec, TaggedDocument
from gensim.models import doc2vec
import multiprocessing
import numpy as np


kkma=Kkma()

#형태소 분석 함
def tokenize_kkma(sen):
    jpype.attachThreadToJVM()
    token_sen=["/".join(word) for word in kkma.pos(sen)]
    return token_sen


def train():
    token_faqs=[(tokenize_kkma(row[1]),row[0]) for row in sheet.sheets]
    tagged_faqs=[TaggedDocument(d,[c]) for d,c in token_faqs]

    cores=multiprocessing.cpu_count()
    d2v_faqs=doc2vec.Doc2Vec(vector_size=50,
                            alpha=0.025,
                            min_alpha=0.025,
                            hs=1,
                            negative=0,
                            dm=-0,
                            dbow_words=1,
                            min_count=1,
                            workers=cores,
                            seed=0)
    d2v_faqs.build_vocab(tagged_faqs)

    for epoch in range(10):
        d2v_faqs.train(tagged_faqs,
                       total_examples=d2v_faqs.corpus_count,
                       epochs=d2v_faqs.epochs)
    return d2v_faqs

d2v=train()
print("hello")
while True:
    test_string=input()
    if test_string=="bye"or test_string=="Bye":
        break
    tokened_test_string=tokenize_kkma(test_string)
    test_vector=d2v.infer_vector(tokened_test_string)
    answer=d2v.docvecs.most_similar([test_vector],topn=1)
    for index, similarity in answer:
        print(sheet.sheets[int(index)-1][2])
    
