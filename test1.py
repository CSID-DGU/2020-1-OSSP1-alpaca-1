import jpype
import sheet
from konlpy.tag import Kkma
from gensim.models.doc2vec import Doc2Vec, TaggedDocument
from gensim.models import doc2vec
import multiprocessing


kkma=Kkma()

#형태소 분석 함
def tokenize_kkma(sen):
    jpype.attachThreadToJVM()
    token_sen=["/".join(word) for word in kkma.pos(sen)]
    return token_sen


def train(test_string):
    token_faqs=[(tokenize_kkma(row[1]),row[0]) for row in sheet.sheets]
    tagged_faqs=[TaggedDocument(d,[c]) for d,c in token_faqs]

    cores=multiprocessing.cpu_count()
    d2v_faqs=doc2vec.Doc2Vec(
                        vector_size=50,
                        alpha=0.025,
                        min_alpha=0.025,
                        hs=1,
                        negative=0,
                        dm=-0,
                        dbow_words=1,
                        min_count=1,
                        workers=cores,
                        seed=0
                        )
    d2v_faqs.build_vocab(tagged_faqs)

    for epoch in range(10):
        d2v_faqs.train(tagged_faqs,
                       total_examples=d2v_faqs.corpus_count,
                       epochs=d2v_faqs.epochs)
    test_vector=d2v_faqs.infer_vector(tokened_test_string)
    print(d2v_faqs.docvecs.most_similar([test_vector],topn=2))


test_string=input()
tokened_test_string=tokenize_kkma(test_string)
train(test_string)
